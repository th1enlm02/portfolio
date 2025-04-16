import {
  devops,
  iac,
  cloud,
  automation,
  student,
  network,
  atom,
  honor,
  academy_honor,
  dormitory_honor_2022_2023,
  dormitory_honor_2023_2024,
  devops_atom,
  devops_trip,
  netchallenge2023,
  high_school,
  ansible,
  api6,
  argocd,
  aws,
  bash,
  css,
  docker,
  fluxcd,
  git,
  github,
  github_actions,
  gitlab,
  grafana,
  haproxy,
  harbor,
  helm,
  html,
  javascript,
  jenkins,
  k8s,
  kafka,
  loki,
  minio,
  mongodb,
  mysql,
  nginx,
  nodejs,
  powershell,
  prometheus,
  python,
  rancher,
  reactjs,
  redis,
  sonarqube,
  tailwind,
  terraform,
  trivy,
  vault,
  network_design,
  teamv,
  nt114,
  nt531,
  nt548,
  nt505,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "activities",
    title: "Activities",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Automation",
    icon: automation,
    link: "https://www.geeksforgeeks.org/what-is-devops-automation/",
  },
  {
    title: "CI/CD",
    icon: devops,
    link: "https://www.geeksforgeeks.org/what-is-ci-cd/",
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: iac,
    link: "https://www.geeksforgeeks.org/what-is-infrastructure-as-code-iac/",
  },
  {
    title: "Cloud Computing",
    icon: cloud,
    link: "https://www.geeksforgeeks.org/cloud-computing/",
  },
];

const technologies = [
  // Programming Languages
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bash",
    icon: bash,
  },
  // {
  //   name: "PowerShell",
  //   icon: powershell,
  // },
  // Tools/DevOps
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "GitLab",
    icon: gitlab,
  },
  // {
  //   name: "GitHub Actions",
  //   icon: github_actions,
  // },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "ArgoCD",
    icon: argocd,
  },
  {
    name: "FluxCD",
    icon: fluxcd,
  },
  // {
    //   name: "Helm",
    //   icon: helm,
    // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
    // {
      //   name: "Rancher",
      //   icon: rancher,
      // },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  // {
  //   name: "Trivy",
  //   icon: trivy,
  // },
  // {
  //   name: "Vault",
  //   icon: vault,
  // },
  // {
  //   name: "SonarQube",
  //   icon: sonarqube,
  // },
  // {
  //   name: "Prometheus",
  //   icon: prometheus,
  // },
  // {
  //   name: "Grafana",
  //   icon: grafana,
  // },
  // {
  //   name: "Loki",
  //   icon: loki,
  // },
  // {
  //   name: "Harbor",
  //   icon: harbor,
  // },
  // {
  //   name: "MinIO",
  //   icon: minio,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "HAProxy",
  //   icon: haproxy,
  // },
  // {
  //   name: "API6",
  //   icon: api6,
  // },
  // {
  //   name: "Nginx",
  //   icon: nginx,
  // },
  // // Web Technologies
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // // Frameworks
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Kafka",
  //   icon: kafka,
  // },
  // // Databases
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  // {
  //   name: "Redis",
  //   icon: redis,
  // },
];

const activities = [
  {
    title: "High School Days",
    issuer: "Vong The High School",
    icon: student,
    iconBg: "#383E56",
    date: "2017 – 2020",
    points: [
      "Ranked top 2 in class every single year – yeah, I was that student 😎.",
      "Used to ball a lot after class – basketball was my thing. Took a break for now, but who knows, I might hit the court again someday!",
      "Big fan of movies and music – Hollywood films are my jam, and I’m deep into rap (especially underground & US rap).",
      `Totally obsessed with TV series like "Breaking Bad", "Peaky Blinders", "True Detective"... absolute masterpieces!`,
      "High school was a fun mix of hard work, hobbies, and hype – a pretty dope time overall!"
    ],
    image: high_school,
  },
  {
    title: "Student",
    issuer: "University of Information Technology, VNU-HCM",
    icon: student,
    iconBg: "#383E56",
    date: "Sep 2021 – Jun 2025",
    points: [
      "GPA: 9.00/10",
      "Awarded Academic Excellence for six consecutive semesters.",
      "Received 5 academic scholarships over 6 semesters.",
      "Awarded the prestigious MIRAE ASSET Scholarship.",
      "Granted a full Cỏ May Dormitory Scholarship for underprivileged students with outstanding academic performance."
    ],
    image: academy_honor,
  },
  {
    title: "Certificate of Academic Excellence (2022 – 2023)",
    issuer: "Cỏ May Dormitory",
    icon: honor,
    iconBg: "#383E56",
    date: "2022 – 2023",
    points: [
      "Awarded for achieving GPA 9.02 and Conduct Score >90 during the full academic year.",
      "Recognized as an outstanding student with excellent academic and personal achievements.",
    ],
    image: dormitory_honor_2022_2023,
  },
  {
    title: "Top 3 - NET Challenge 2023 (BotN)",
    issuer: "Organized by the Faculty of Computer Networks and Communications, UIT VNU-HCM",
    icon: network,
    iconBg: "#383E56",
    date: "October 2023",
    points: [
      "Achieved Top 3 as part of a 3-member team in the final round of a competitive challenge focused on network configuration and troubleshooting.",
      "The network administration competition includes two rounds. Round 1 is a theoretical test on networking knowledge. The final round involves hands-on configuration of a physical network. Teams must demonstrate both technical expertise and practical skills to win.",
    ],
    image: netchallenge2023,
  },
  {
    title: "Certificate of Academic Excellence (2023 – 2024)",
    issuer: "Cỏ May Dormitory",
    icon: honor,
    iconBg: "#383E56",
    date: "2023 – 2024",
    points: [
      "Awarded for achieving GPA 9.05 and Conduct Score >90 during the full academic year.",
      "Honored for consistent excellence and strong performance throughout the year.",
    ],
    image: dormitory_honor_2023_2024,
  },
  {
    title: "DevOps Engineer",
    issuer: "ATOM Solution (Ho Chi Minh City, Vietnam)",
    icon: atom,
    iconBg: "#383E56",
    date: "June 2024 – April 2025",
    points: [
      "Participated directly in building and managing the production infrastructure for merchant platforms of OCB and BVBank, ensuring stability and scalability.",
      "Collaborated with the development team to deploy services to K8s clusters in production environments.",
      "Implemented and managed proxy servers and monitoring tools to enhance system performance and reliability.",
      "Developed automation scripts using Bash, Python, Ansible, and Terraform to streamline infrastructure deployment and management."
    ],
    image: devops_atom,
  },
  {
    title: `"Company" Trip`,
    issuer: "ATOM Solution - DevOps Team",
    icon: atom,
    iconBg: "#383E56",
    date: "March 2025",
    points: [
      "An unforgettable trip to Vũng Tàu with the DevOps team — more than just colleagues, they are brothers, mentors, and friends who have supported me throughout the journey.",
      "This trip was not only a break from work but also a bonding experience that strengthened our team spirit and connection.",
      "Grateful for the time, laughter, and memories shared together — truly one of the highlights of my time at ATOM Solution."
    ],
    image: devops_trip,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Development of a system for predicting Continuous Integration build failures using Deep Learning and MLOps",
    description:
      "This thesis focuses on the development of a predictive system for Continuous Integration (CI) build failures using Deep Learning techniques, particularly Long Short-Term Memory (LSTM) networks. The system aims to analyze historical CI build data to anticipate the outcome of upcoming builds, allowing developers to detect potential failures early and minimize disruptions in the development pipeline.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MLOps",
        color: "pink-text-gradient",
      },
      {
        name: "Github Actions",
        color: "green-text-gradient",
      },
    ],
    image: nt505,
    source_code_link: "https://github.com/NT505-P21-KLTN-ThienLM-PhuongQTH",
  },
  {
    name: "Implementing a DevSecOps model for High Availability CI/CD System in Microservices environments",
    description:
      "The project focuses on applying DevSecOps to build a high-availability CI/CD system, integrating security throughout the entire development and deployment pipeline. By embedding security measures at every stage, the system ensures operational efficiency and information security, reducing vulnerabilities while maintaining seamless software delivery.",
    tags: [
      {
        name: "DevSecOps",
        color: "blue-text-gradient",
      },
      {
        name: "High Availability",
        color: "green-text-gradient",
      },
      {
        name: "Microservices",
        color: "pink-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "orange-text-gradient",
      },
    ],
    image: nt548,
    source_code_link: "https://github.com/NT548-P11-DevOps-Technology",
  },
  {
    name: "Monitoring Cloud Infrastructure Using Prometheus & Loki with Grafana & Icinga for Microservices Applications on K3s",
    description:
      "This project focuses on designing and implementing a cloud infrastructure monitoring system for microservices applications deployed on K3s. It combines Prometheus and Loki for real-time metrics and log collection, visualized through Grafana dashboards. Icinga is integrated to monitor service health, server status, and trigger alerts for anomalies.",
    tags: [
      {
        name: "Prometheus",
        color: "blue-text-gradient",
      },
      {
        name: "Loki",
        color: "green-text-gradient",
      },
      {
        name: "Grafana",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: nt531,
    source_code_link: "https://github.com/NT531-P11-Monitoring-Tools",
  },
  {
    name: "Build a CI/CD pipeline for a microservices application",
    description:
      "This CI/CD pipeline automates the build, test, and deployment of a microservices app across dev, staging, and production. Jenkins handles the workflow, with Docker Compose for dev, a kubeadm-based cluster for staging, and EKS for production. Security scans (Trivy) and monitoring (Prometheus, Grafana) are integrated using GitHub Actions and Helm.",
    tags: [
      {
        name: "Jenkins",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
      {
        name: "Github Actions",
        color: "yellow-text-gradient",
      },
      {
        name: "Monitoring",
        color: "orange-text-gradient",
      },
    ],
    image: nt114,
    source_code_link: "https://github.com/NT114-O21-DACN-DevOps",
  },
  {
    name: "teamV",
    description:
      "teamV is a comprehensive Android application designed to streamline personal task management. This project, developed as part of a course on Mobile Applications Development, offers a user-friendly interface and robust functionality for organizing and tracking your tasks and notes.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: teamv,
    source_code_link: "https://github.com/th1enlm02/teamV",
  },
  {
    name: "Network Design for Enterprise",
    description:
      "Provided guidance and solutions for designing a network system that meets user requirements, wireless networking, and services utilized within the system.",
    tags: [
      {
        name: "Networking",
        color: "blue-text-gradient",
      },
      {
        name: "Network Security",
        color: "green-text-gradient",
      },
      {
        name: "Network Design",
        color: "pink-text-gradient",
      },
      {
        name: "Troubleshooting",
        color: "orange-text-gradient",
      }
    ],
    image: network_design,
    source_code_link: "https://github.com/th1enlm02/Network-Design-for-Enterprise",
  },
];

export { services, technologies, activities, testimonials, projects };
