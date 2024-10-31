type breadcrumb = {
  name: string;
  path: string;
}

type Theme = 'light' | 'dark';

type TaskCategory = {
  name: string;
  count: number;
  type: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
}

type user = {
  name: string;
  avatar: string;
}

type Task = {
  name: string;
  status: string;
  startDate: Date;
  endDate: Date;
  description: string;
  assignees: user[];
  banner?: string;
}