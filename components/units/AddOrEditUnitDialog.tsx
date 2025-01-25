import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAddUnit, useEditUnit } from "@/hooks/use-units";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";

const unitSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  bedroomsNumber: z.coerce
    .number()
    .min(1, "Number of bedrooms must be 1 or greater"),
  bathroomsNumber: z.coerce
    .number()
    .min(1, "Number of bathrooms must be 1 or greater"),
  space: z.coerce.number().min(1, "Space must be greater than 0"),
  status: z.enum([
    "approved",
    "pending",
    "reserved",
    "rejected",
    "sold",
  ] as const),
  coverUrl: z
    .string()
    .url("Invalid URL")
    .optional()
    .default(
      "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996"
    ),
  createdAt: z.string().default(new Date().toISOString()),
});

type UnitFormData = z.infer<typeof unitSchema>;

interface AddOrEditUnitDialogProps {
  unit?: TUnit;
  trigger: React.ReactNode;
}

export function AddOrEditUnitDialog({
  unit,
  trigger,
}: AddOrEditUnitDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const addUnit = useAddUnit();
  const editUnit = useEditUnit();

  const form = useForm<UnitFormData>({
    resolver: zodResolver(unitSchema),
    defaultValues: unit || {
      name: "",
      address: "",
      price: 0,
      bedroomsNumber: 0,
      bathroomsNumber: 0,
      space: 0,
      status: "pending",
      coverUrl:
        "https://img.freepik.com/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-170466.jpg?t=st=1737223250~exp=1737226850~hmac=3e175797ac91fbc58598e2a37b2defc6f67a45fc4015b57665078caaefe5fcc4&w=996",
    },
  });

  async function onSubmit(data: UnitFormData) {
    try {
      if (unit) {
        await editUnit.mutateAsync({
          ...data,
          id: unit.id,
          createdAt: unit.createdAt,
        });
        toast.success("Success", {
          description: "Unit updated successfully",
        });
      } else {
        await addUnit.mutateAsync(data);
        toast.success("Success", {
          description: "Unit added successfully",
        });
      }
      setIsOpen(false);
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Failed to save unit. Please try again.",
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{unit ? "Edit Unit" : "Add New Unit"}</DialogTitle>
          <DialogDescription>
            {unit
              ? "Update the details of the existing unit."
              : "Fill in the details to add a new unit."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ScrollArea className="h-[50vh]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Unit name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Unit address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (EGP)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Unit price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="bedroomsNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Bedrooms</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Number of bedrooms"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bathroomsNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Bathrooms</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Number of bathrooms"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="space"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Space (m²)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Unit space"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="reserved">Reserved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                          <SelectItem value="sold">Sold</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coverUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Image URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com/image.jpg"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a valid URL for the unit&apos;s cover image.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button
                type="submit"
                disabled={addUnit.isPending || editUnit.isPending}
              >
                {addUnit.isPending || editUnit.isPending
                  ? "Saving..."
                  : unit
                  ? "Update Unit"
                  : "Add Unit"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
