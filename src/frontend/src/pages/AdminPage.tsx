import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, ShieldX, Trash2, Users } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import {
  useDeleteEnquiry,
  useIsCallerAdmin,
  useListEnquiries,
} from "../hooks/useQueries";

const SERVICE_LABELS: Record<string, string> = {
  sezServices: "SEZ Services",
  gstRelated: "GST Related",
  dgft: "DGFT",
  stpi: "STPI",
  hundredPercentEOU: "100% EOU",
  incomeTaxReturn: "Income Tax Return",
  labourLawCompliances: "Labour Law",
  general: "General",
  payrollServices: "Payroll Services",
};

export function AdminPage() {
  const { data: isAdmin, isLoading: isAdminLoading } = useIsCallerAdmin();
  const { data: enquiries, isLoading, isError, refetch } = useListEnquiries();
  const { mutate: deleteEnquiry, isPending: isDeleting } = useDeleteEnquiry();

  const handleDelete = (id: bigint) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    deleteEnquiry(id, {
      onSuccess: () => {
        toast.success("Enquiry deleted successfully.");
      },
      onError: () => {
        toast.error("Failed to delete enquiry.");
      },
    });
  };

  return (
    <>
      <PageHero
        title="Admin — Enquiries"
        subtitle="Manage and review all submitted client enquiries."
      />

      <section className="py-12 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4">
          {isAdminLoading && (
            <div
              data-ocid="admin.loading_state"
              className="flex items-center justify-center py-16"
            >
              <Loader2
                className="w-8 h-8 animate-spin"
                style={{ color: "oklch(var(--navy))" }}
              />
            </div>
          )}

          {!isAdminLoading && isAdmin === false && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 gap-4"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "oklch(var(--destructive) / 0.1)" }}
              >
                <ShieldX
                  className="w-10 h-10"
                  style={{ color: "oklch(var(--destructive))" }}
                />
              </div>
              <h2
                className="text-2xl font-display"
                style={{ color: "oklch(var(--navy))" }}
              >
                Access Denied
              </h2>
              <p className="text-muted-foreground text-center max-w-md">
                You do not have admin access to view enquiries. Please log in
                with an administrator account.
              </p>
            </motion.div>
          )}

          {!isAdminLoading && isAdmin === true && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                  >
                    <Users
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--navy))" }}
                    />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Client Enquiries
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {enquiries?.length ?? 0} total enquiries
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => refetch()}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Refresh"
                  )}
                </Button>
              </div>

              {isError && (
                <div
                  data-ocid="admin.error_state"
                  className="p-4 rounded-xl mb-6"
                  style={{
                    backgroundColor: "oklch(0.95 0.05 27 / 0.15)",
                    border: "1px solid oklch(0.7 0.15 27 / 0.3)",
                  }}
                >
                  <p className="text-sm text-red-700">
                    Failed to load enquiries. Please refresh.
                  </p>
                </div>
              )}

              {isLoading ? (
                <div data-ocid="admin.loading_state" className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-14 w-full rounded-lg" />
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-xl overflow-hidden shadow-sm"
                  style={{ border: "1px solid oklch(var(--border))" }}
                >
                  <Table>
                    <TableHeader>
                      <TableRow
                        style={{ backgroundColor: "oklch(var(--secondary))" }}
                      >
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          ID
                        </TableHead>
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          Name
                        </TableHead>
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          Email
                        </TableHead>
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          Phone
                        </TableHead>
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          Service
                        </TableHead>
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          Message
                        </TableHead>
                        <TableHead
                          className="font-semibold text-xs uppercase tracking-wider"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          Action
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {!enquiries || enquiries.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-16">
                            <div className="flex flex-col items-center gap-2">
                              <p className="text-muted-foreground text-sm">
                                No enquiries yet.
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        enquiries.map((enquiry, i) => (
                          <TableRow
                            key={enquiry.id.toString()}
                            data-ocid={`admin.item.${i + 1}`}
                            className="hover:bg-secondary/50 transition-colors"
                          >
                            <TableCell className="font-mono text-xs text-muted-foreground">
                              #{enquiry.id.toString()}
                            </TableCell>
                            <TableCell className="font-medium text-sm">
                              {enquiry.name}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {enquiry.email}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {enquiry.phone || "—"}
                            </TableCell>
                            <TableCell>
                              <span
                                className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: "oklch(var(--navy) / 0.08)",
                                  color: "oklch(var(--navy))",
                                }}
                              >
                                {SERVICE_LABELS[enquiry.serviceInterest] ??
                                  enquiry.serviceInterest}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                              {enquiry.message || "—"}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                data-ocid={`admin.delete_button.${i + 1}`}
                                onClick={() => handleDelete(enquiry.id)}
                                disabled={isDeleting}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
