import React from 'react';
import PropTypes from 'prop-types';

function Link(link) {
  return (
    <div>
      <div>
        {link.description} ({link.url} - {link.hash})
      </div>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    hash: PropTypes.string,
    description: PropTypes.string
  })
};

export default Link;
