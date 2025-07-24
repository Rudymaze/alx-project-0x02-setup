interface Props {
  title: string;
  description: string;
}

interface CardProps {
  title: string;
  content: string;
}

export type { Props, CardProps };

interface State {
  isLoading: boolean;
}
