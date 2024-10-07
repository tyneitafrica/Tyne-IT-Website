export type Service = {
    name: string;
    path: string;
    description: string;
    shortKeyPoints: string[];
}

export const services = [
    {
      name: "HRM (Human Resource Management)",
      path: "/services/hrm",
      description: "At Tyne Africa IT Consulting, we offer comprehensive Human Resource Management (HRM) solutions designed to streamline your HR processes. From employee management to payroll systems, our HRM services help businesses automate and manage their human capital effectively, saving time and reducing manual efforts.",
      shortKeyPoints: [
        "Employee management systems",
        "Automated payroll processing",
        "Talent acquisition and onboarding",
        "Compliance and performance tracking"
      ]
    },
    {
      name: "Software Management",
      path: "/services/software-management",
      description: "Our Software Asset Management services help businesses efficiently manage and optimize their software resources. We assist in license tracking, compliance management, and software usage optimization, ensuring that your organization maximizes value while minimizing costs and risks associated with software assets.",
      shortKeyPoints: [
        "License tracking and compliance",
        "Software usage optimization",
        "Cost reduction strategies",
        "Audit preparation and reporting"
      ]
    },
    {
      name: "Equipment Leasing",
      description: "Tyne Africa IT Consulting offers flexible and affordable equipment leasing solutions to help businesses access the latest technology without the upfront investment. From IT infrastructure to specialized hardware, our leasing options enable you to stay competitive while managing cash flow effectively.",
      path: "services/equipment-leasing",
      shortKeyPoints: [
        "Flexible leasing terms",
        "Access to the latest technology",
        "Cost-effective solutions",
        "Maintenance and support included"
      ]
    }
  ];
  