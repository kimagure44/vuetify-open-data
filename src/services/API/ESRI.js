const ESRI = {
  async get(endPoint = '') {
    let url = '';
    let data = '';
    if (endPoint.length > 0) {
      if (endPoint === 'gasStation') {
        url = 'https://opendata.arcgis.com/datasets/6a9b9211b58845eaaf3702459c86c324_0.geojson';
      }
      if (endPoint === 'beaches') {
        url = 'https://opendata.arcgis.com/datasets/84ddbc8cf4104a579d579f6441fcaa8a_0.geojson';
      }
      if (url.length > 0) {
        const res = await fetch(url);
        data = await res.json();
      }
    } else {
      data = {
        code: 500,
        statusText: 'Es necesario indicar endpoint',
      };
    }
    return data;
  },
};

export default ESRI;
