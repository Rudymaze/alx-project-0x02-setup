interface Props {
  title: string;
  description: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children?: React.ReactNode;
  [key: string]: any;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type { Props, CardProps, ButtonProps, PostProps };

interface State {
  isLoading: boolean;
}
