import { NewIncidentForm } from "@/components/NewIncidentForm";
import { IncidentCard } from "@/components/IncidentCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Incident, Severity } from "@/types/incident";
import { useState } from "react";
import { mockIncidents } from "@/data/mockIncidents";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Index() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState<"All" | Severity>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const handleNewIncident = (newIncident: Omit<Incident, "id">) => {
    const maxId = Math.max(...incidents.map((i) => i.id), 0);
    setIncidents([{ ...newIncident, id: maxId + 1 }, ...incidents]);
  };

  const filteredAndSortedIncidents = incidents
    .filter((incident) =>
      selectedSeverity === "All" ? true : incident.severity === selectedSeverity
    )
    .sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="container mx-auto max-w-4xl py-8 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="flex items-center mb-8">
        {/* <img 
          src="/placeholder.svg" 
          alt="AI Safety Insights Logo" 
          className="h-16 w-16 mr-4"
        /> */}
        <span className="text-2xl font-bold text-black dark:text-white mr-4 font-heading">
    SPARKLE <span className="text-[#A35C7A] dark:text-[#657C6A] font-bold font-serif">HOOD</span>
  </span>
  <img src="logo.png" alt="Logo" className="h-6 w-7 mr-1" />
        <h1 className="text-2xl font-bold font-heading flex-grow text-right">
          AI Safety Incident Dashboard
        </h1>
        <div className="flex items-center">
  <h1 className="text-2xl font-bold font-heading flex-grow text-right">
    {/* Your h1 content here */}
  </h1>
</div>

      </div>
      
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-heading font-bold">Report New Incident</h2>
        <NewIncidentForm onSubmit={handleNewIncident} />
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xl font-semibold font-body">Incident List</h2>
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Filter by Severity:</span>
            <Select
              value={selectedSeverity}
              onValueChange={(value: "All" | Severity) => setSelectedSeverity(value)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sort by Date:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
              className="gap-2"
            >
              {sortOrder === "newest" ? (
                <>
                  Newest First
                  <ArrowDown className="h-4 w-4" />
                </>
              ) : (
                <>
                  Oldest First
                  <ArrowUp className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-4 font-body">
          {filteredAndSortedIncidents.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} />
          ))}
          {filteredAndSortedIncidents.length === 0 && (
            <p className="text-center text-gray-500">No incidents found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
