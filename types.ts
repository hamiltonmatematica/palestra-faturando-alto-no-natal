export interface Speaker {
  name: string;
  role: string;
  image: string;
  colorTheme: 'red' | 'green';
}

export interface EventDetails {
  date: string;
  time: string;
  location: string;
  city: string;
}