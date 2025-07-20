export const weatherSchema = {
  type: 'object',
  properties: {
    location: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        region: { type: 'string' },
        country: { type: 'string' },
        lat: { type: 'number' },
        lon: { type: 'number' },
        tz_id: { type: 'string' },
        localtime_epoch: { type: 'number' },
        localtime: { type: 'string' },
      },
      required: ['name', 'region', 'country', 'lat', 'lon', 'tz_id', 'localtime_epoch', 'localtime']
    },
    current: {
      type: 'object',
      properties: {
        last_updated_epoch: { type: 'number' },
        last_updated: { type: 'string' },
        temp_c: { type: 'number' },
        temp_f: { type: 'number' },
        is_day: { type: 'number' },
        condition: {
          type: 'object',
          properties: {
            text: { type: 'string' },
            icon: { type: 'string' },
            code: { type: 'number' },
          },
          required: ['text', 'icon', 'code']
        },
        wind_mph: { type: 'number' },
        wind_kph: { type: 'number' },
        wind_degree: { type: 'number' },
        wind_dir: { type: 'string' },
        pressure_mb: { type: 'number' },
        pressure_in: { type: 'number' },
        precip_mm: { type: 'number' },
        precip_in: { type: 'number' },
        humidity: { type: 'number' },
        cloud: { type: 'number' },
        feelslike_c: { type: 'number' },
        feelslike_f: { type: 'number' },
        windchill_c: { type: 'number' },
        windchill_f: { type: 'number' },
        heatindex_c: { type: 'number' },
        heatindex_f: { type: 'number' },
        dewpoint_c: { type: 'number' },
        dewpoint_f: { type: 'number' },
        vis_km: { type: 'number' },
        vis_miles: { type: 'number' },
        uv: { type: 'number' },
        gust_mph: { type: 'number' },
        gust_kph: { type: 'number' },
      },
      required: [
        'last_updated_epoch', 'last_updated', 'temp_c', 'temp_f', 'is_day', 'condition',
        'wind_mph', 'wind_kph', 'wind_degree', 'wind_dir', 'pressure_mb', 'pressure_in',
        'precip_mm', 'precip_in', 'humidity', 'cloud', 'feelslike_c', 'feelslike_f',
        'windchill_c', 'windchill_f', 'heatindex_c', 'heatindex_f', 'dewpoint_c', 'dewpoint_f',
        'vis_km', 'vis_miles', 'uv', 'gust_mph', 'gust_kph'
      ]
    },
  },
  required: ['location', 'current']
};
