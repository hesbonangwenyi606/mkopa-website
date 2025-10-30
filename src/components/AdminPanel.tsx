import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Dummy data placeholders (Replace with backend API calls)
const phones = [
  { id: 1, name: "Samsung A14", price: 14000, status: "Available" },
  { id: 2, name: "iPhone 11", price: 52000, status: "Out of Stock" },
];

const applications = [
  { id: 1, name: "John Doe", device: "Samsung A14", status: "Pending" },
];

const mpesaRequests = [
  { id: 1, businessName: "KenTech", status: "Processing" },
];

const simRequests = [
  { id: 1, customer: "Mary Wanjiku", type: "SIM Replacement", status: "Completed" },
];

export default function AdminPanel() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <Tabs defaultValue="phones" className="space-y-4">
        <TabsList>
          <TabsTrigger value="phones">Phone Inventory</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="mpesa">M-PESA Requests</TabsTrigger>
          <TabsTrigger value="sim">SIM Services</TabsTrigger>
        </TabsList>

        {/* Phone Inventory */}
        <TabsContent value="phones">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Manage Phones</h2>
              {phones.map((phone) => (
                <div key={phone.id} className="grid grid-cols-4 gap-4 border-b pb-3">
                  <span>{phone.name}</span>
                  <Input defaultValue={phone.price} type="number" />
                  <select defaultValue={phone.status} className="border rounded p-2">
                    <option>Available</option>
                    <option>Out of Stock</option>
                  </select>
                  <Button>Update</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Phone Applications */}
        <TabsContent value="applications">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.name}</TableCell>
                      <TableCell>{app.device}</TableCell>
                      <TableCell>{app.status}</TableCell>
                      <TableCell>
                        <Button>Mark Completed</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* M-PESA Requests */}
        <TabsContent value="mpesa">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Business Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mpesaRequests.map((mp) => (
                    <TableRow key={mp.id}>
                      <TableCell>{mp.businessName}</TableCell>
                      <TableCell>{mp.status}</TableCell>
                      <TableCell>
                        <Button>Update</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SIM Service Requests */}
        <TabsContent value="sim">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {simRequests.map((sim) => (
                    <TableRow key={sim.id}>
                      <TableCell>{sim.customer}</TableCell>
                      <TableCell>{sim.type}</TableCell>
                      <TableCell>{sim.status}</TableCell>
                      <TableCell>
                        <Button>Update</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
