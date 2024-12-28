function createAreaElement(shape, coords, href, alt) {
  // Create a new <area> element
  var area = document.createElement('area');

  // Set the attributes for the <area> element
  area.setAttribute('shape', shape);
  area.setAttribute('coords', coords);
  area.setAttribute('href', href);
  area.setAttribute('alt', alt);

  // Return the created <area> element
  return area;
}

// Example usage:
var newArea = createAreaElement('rect', '0,0,50,50', 'https://example.com', 'Example Area');
// Add the newly created <area> element to an existing <map> element
document.getElementById('yourMapId').appendChild(newArea);
