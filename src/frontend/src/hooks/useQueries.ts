import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ServiceInterest } from "../backend.d";
import { useActor } from "./useActor";

export function useListEnquiries() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listEnquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDeleteEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor available");
      return actor.deleteEnquiry(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
    },
  });
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      serviceInterest: ServiceInterest;
    }) => {
      if (!actor) throw new Error("No actor available");
      return actor.submitEnquiry(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.serviceInterest,
      );
    },
  });
}
