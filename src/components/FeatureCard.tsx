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
      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-kiween-green hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-16 h-16 bg-kiween-green rounded-lg flex items-center justify-center group-hover:bg-kiween-orange transition-colors">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="font-medium text-kiween-text text-sm leading-tight">{title}</h3>
        {category && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{category}</span>
        )}
      </div>
    </Link>
  );
}