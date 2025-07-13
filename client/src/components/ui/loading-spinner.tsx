import { cn } from "@/lib/utils";
import { RajasthaniLoadingSpinner, RajasthaniMandalaaSpinner, RajasthaniPalaceSpinner, RajasthaniTextSpinner } from "../rajasthani-loading-spinner";

interface LoadingSpinnerProps {
  variant?: "default" | "mandala" | "palace" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
}

export function LoadingSpinner({ 
  variant = "default", 
  size = "md", 
  className,
  text 
}: LoadingSpinnerProps) {
  switch (variant) {
    case "mandala":
      return <RajasthaniMandalaaSpinner size={size} className={className} />;
    case "palace":
      return <RajasthaniPalaceSpinner size={size} className={className} />;
    case "text":
      return <RajasthaniTextSpinner text={text} className={className} />;
    default:
      return <RajasthaniLoadingSpinner size={size} className={className} />;
  }
}

export function FullScreenLoader({ 
  text = "Loading Rajasthan Tours...", 
  className 
}: { text?: string; className?: string }) {
  return (
    <div className={cn(
      "fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center",
      className
    )}>
      <div className="text-center">
        <RajasthaniTextSpinner text={text} />
      </div>
    </div>
  );
}

export function InlineLoader({ 
  variant = "default", 
  size = "sm", 
  className 
}: Omit<LoadingSpinnerProps, 'text'>) {
  return (
    <div className={cn("flex items-center justify-center p-4", className)}>
      <LoadingSpinner variant={variant} size={size} />
    </div>
  );
}