import { toast as sonnerToast } from "sonner";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function toast({ title, description, variant }: ToastOptions) {
  if (variant === "destructive") {
    return sonnerToast.error(title, { description });
  }
  return sonnerToast(title, { description });
}
