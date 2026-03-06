import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = Map.empty<Text, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, message : Text) : async Bool {
    let timestamp = Time.now();
    let inquiry : Inquiry = {
      name;
      email;
      phone;
      message;
      timestamp;
    };

    let key = timestamp.toText();

    switch (inquiries.get(key)) {
      case (null) {
        inquiries.add(key, inquiry);
        true;
      };
      case (?_existing) {
        Runtime.trap("An inquiry with this timestamp already exists.");
      };
    };
  };

  public shared ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};
