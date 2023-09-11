import 'bootstrap-icons/font/bootstrap-icons.css';

export default function IconsExample() {
  return (
    <>
      <div>
        <i className="bi bi-heart-fill"></i>
      </div>
      <div>
        <i className="bi bi-film"></i>
      </div>

      <p>You can add color</p>
      <i className="bi bi-heart-fill" style={{ fontSize: '2rem', color: 'pink' }}></i>
      <h3>You can make the icon bigger</h3>
      <i className="bi bi-heart-fill" style={{ fontSize: '10rem', color: 'greenyellow' }}></i>
    </>
  );
}