//Component - returns ONE thing - ex a div, article etc. you can also use <> empty
export function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">
              <h2>Byont</h2>
            </a>
          </li>
          <li>
            <a href="">Who are we</a>
          </li>
          <li>
            <a href="">The problems</a>
          </li>
          <li>
            <a href="">Our services</a>
          </li>
          <li>
            <a href="">Testemonials</a>
          </li>
          <li>
            <button>Contact us</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
