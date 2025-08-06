import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  url: string;
  icon: LucideIcon;
  category?: string;
}

export function FeatureCard({ title, url, icon: Icon, category }: FeatureCardProps) {
  return (
    <Link
      to={url}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 hover:border-kiween-green/50"
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-button flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-kiween-green transition-colors duration-300">{title}</h3>
        {category && (
          <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium">{category}</span>
        )}
      </div>
    </Link>
  );
}