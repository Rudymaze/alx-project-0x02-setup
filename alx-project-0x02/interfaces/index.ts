interface Props {
  title: string;
  description: string;
}
export interface CardProps {
  title: string;
  content: string;
}

export type { Props };

interface State {
  isLoading: boolean;
}
