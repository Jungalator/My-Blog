const getCurrentGeo = async () => {
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      return { lat, lon };
    } catch (error) {
      console.log("Geo is not found", error);
      return { lat: 50.4375, lon: 30.5 };
    }
  } else {
    console.log("Geo is not supported by this browser");
    return { lat: 50.4375, lon: 30.5 };
  }
};

export default getCurrentGeo;
