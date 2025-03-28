export type ContainerOptions = 'start' | 'not-found' | 'found';

export type WeatherData = {
    name:  string;
    temperature:  number;
    humidity:  number;
    icon: string;
    windSpeed: number;
    description: string;
  }