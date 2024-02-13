export interface Options {
  colors: string[];
  chart: {
    foreColor: string;
    type: string;
    offsetY: number;
    sparkline: {
      enabled: boolean;
    };
  };
  plotOptions: {
    radialBar: {
      startAngle: number;
      endAngle: number;
      track: {
        background: string;
        strokeWidth: string;
        margin: number;
        dropShadow: {
          enabled: boolean;
          top: number;
          left: number;
          color: string;
          opacity: number;
          blur: number;
        };
      };
      dataLabels: {
        name: {
          show: boolean;
        };
        value: {
          offsetY: number;
          fontSize: string;
          style: {
            color: string;
          };
        };
      };
      hollow: {
        margin: number;
        size: string;
      };
    };
  };
  grid: {
    padding: {
      top: number;
    };
  };
  fill: {
    type: string;
    colors: string[];
  };
}
