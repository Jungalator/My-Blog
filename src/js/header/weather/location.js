async function getCurrentLocation(lat, lon) {
  const locationURL = `https:nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`;

  try {
    const response = await fetch(locationURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const city =
      data.address.city || data.address.town || data.address.village || "Kyiv";
    const country = data.address.country || "Ukraine";
    return { city, country };
  } catch (error) {
    console.error("Error getting location data:", error.message);
    return { city: "Kyiv", country: "Ukraine" };
  }
}

export default getCurrentLocation;
