import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme2();
  const styles = useStyles2(getStyles);
  let color = theme.visualization.getColorByName(options.color);
  const radii = data.series
    .map((series) => series.fields.find((field) => field.type === 'number'))
    .map((field) => field?.values.get(field.values.length - 1));
  const valueToDisplay = radii[0]; 
  const circleRadius = Math.min(width, height) / 4;
  const fillLevel = (typeof valueToDisplay === 'number' && circleRadius > 0)
  ? valueToDisplay / circleRadius
  : 0
 return (
    <div className={cx(styles.wrapper)}>
      <svg
        className={styles.svg}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <clipPath id={`clip-${options.panelId}`}>
            <rect x="0" y={height * (1 - fillLevel)} width={width} height={height * fillLevel} />

          </clipPath>
        </defs>
        <circle
          cx={width / 2}
          cy={height / 2}
          r={circleRadius}
          fill={color}
          clipPath={`url(#clip-${options.panelId})`}
        />
        <text
          x={width / 2}
          y={height / 2 - circleRadius - 20} 
          textAnchor="middle"
          fill={color}
          fontSize="16" 
          fontFamily="Open Sans"
        >
          {valueToDisplay}
        </text>
      </svg>
      <div className={styles.textBox}>
        {options.showSeriesCount && <div>Number of series: {data.series.length}</div>}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};
