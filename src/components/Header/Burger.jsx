const Burger = ({ callback, isOpen }) => {
  const handleClick = () => {
    callback(!isOpen);
  };

  return (
    <div onClick={handleClick} className="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
