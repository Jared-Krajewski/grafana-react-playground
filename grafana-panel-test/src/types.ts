type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'green' | 'blue';
export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
    upperThreshold: number;
  lowerThreshold: number;
  textColor: string;
  alertEnabled: boolean;
  color: CircleColor;
  panelId: Number;
}

// export const defaults: SimpleOptions = {
//   upperThreshold: 7.5,
//   lowerThreshold: 6.5,
//   textColor: 'white',
//   alertEnabled: true,
// };
