import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Enquiry module
  module Enquiry {
    public type ServiceInterest = {
      #sezServices;
      #stpi;
      #hundredPercentEOU;
      #dgft;
      #gstRelated;
      #incomeTaxReturn;
      #payrollServices;
      #labourLawCompliances;
      #general;
    };

    public type Enquiry = {
      id : Nat;
      name : Text;
      email : Text;
      phone : Text;
      message : Text;
      serviceInterest : ServiceInterest;
    };

    public func compare(e1 : Enquiry, e2 : Enquiry) : Order.Order {
      Nat.compare(e1.id, e2.id);
    };
  };

  let enquiries = Map.empty<Nat, Enquiry.Enquiry>();
  var nextId = 1;

  // Public function - anyone including guests can submit enquiries
  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, message : Text, serviceInterest : Enquiry.ServiceInterest) : async () {
    let enquiry : Enquiry.Enquiry = {
      id = nextId;
      name;
      email;
      phone;
      message;
      serviceInterest;
    };
    enquiries.add(nextId, enquiry);
    nextId += 1;
  };

  // Admin-only function to list all enquiries
  public query ({ caller }) func listEnquiries() : async [Enquiry.Enquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can list enquiries");
    };

    enquiries.values().toArray().sort();
  };

  // Admin-only function to delete an enquiry
  public shared ({ caller }) func deleteEnquiry(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete enquiries");
    };

    switch (enquiries.get(id)) {
      case (null) {
        Runtime.trap("Enquiry does not exist");
      };
      case (?_) {
        enquiries.remove(id);
      };
    };
  };
};
