
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Incident } from "@/types/incident";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface IncidentCardProps {
  incident: Incident;
}

export function IncidentCard({ incident }: IncidentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const severityColors = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  };

  const formattedDate = new Date(incident.reported_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="p-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{incident.title}</h3>
            <span
              className={cn(
                "rounded-full px-2 py-1 text-xs font-medium",
                severityColors[incident.severity]
              )}
            >
              {incident.severity}
            </span>
          </div>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="shrink-0"
        >
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>
      {isExpanded && (
        <div className="mt-4 border-t pt-4">
          <p className="text-sm text-gray-700">{incident.description}</p>
        </div>
      )}
    </Card>
  );
}
