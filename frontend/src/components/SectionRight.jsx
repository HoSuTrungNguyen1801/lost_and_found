import React from 'react';

const SectionRight = () => {
  return (
    <aside className="sticky sidebar right-sidebar" style={styles.section}>
      <h2 className="text-xl font-bold">Sidebar</h2>
      <ul>
        <li><a href="#" className="block py-2">Link 1</a></li>
        <li><a href="#" className="block py-2">Link 2</a></li>
        <li><a href="#" className="block py-2">Link 3</a></li>
      </ul>
    </aside>
  );
};

const styles = {
    aside: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        color: '#333'
  },
};

export default SectionRight;
