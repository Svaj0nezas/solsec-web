import { BugReportForm } from "./components/form";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function KontaktaiPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Kontaktai</h1>
      <p className="text-gray-600 mb-8">
        Čia rasite mūsų kontaktinę informaciją.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div>
          <BugReportForm />
        </div>

        {/* Right: Contact Info */}

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Mūsų kontaktai</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
