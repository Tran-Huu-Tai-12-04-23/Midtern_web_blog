import ButtonCustom from "../ButtonCustom";

const CardProfile = () => {
  return (
    <div
      className=" w-100 bg-second br-primary overflow-hidden position-relative"
      style={
        {
          // height: "35vh",
        }
      }
    >
      <img
        style={{
          width: "100%",
          height: "15vh",
          objectFit: "cover",
        }}
        src="https://i.pinimg.com/564x/cd/1d/81/cd1d81f933e8370b59bc81977e2fee7c.jpg"
      ></img>
      <div
        className="position-absolute center"
        style={{
          borderRadius: "50%",
          width: "3.5rem",
          height: "3.5rem",
          border: "1px solid #18c3e9",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          class="avatar "
          style={{}}
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAdQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEEBgcIAwL/xAA7EAABAwMBBAgDBQcFAAAAAAABAAIDBAURIQYSMUEHEyJRYXGBoRQzQhUjMpGxUnKCkrLB0RZTYuHw/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAeEQEAAwADAQADAAAAAAAAAAAAAQIRAxIhMUFCYf/aAAwDAQACEQMRAD8A3iiIgIiICIvCsq6ehp5KmsnjggjG8+WVwa1o7ySg90Ws710zWCjkkjtkFRcHMGA9o6tjj4E648ceWVr68dLu1de8/BzwW2Lk2niDnerng+wCDo1FzrZOlzaK2uHxrvtNv1Coc1n5FrNPdbM2S6VbHtBPHR1Ifba153WR1BBY89zX8M+BwUGfIqA5VUBERAREQEREBEVHHAJJwBzQQu1209v2VtD7hcXE/TDCz8cz+TR/c8gubdrdrLttZWdddJ/uWOzDSMP3cPkOZ/5HXyGiu+kbaeXanaaoqd8/BU5MNGzkGA6u83EZ8sDkscpqeeqk6ulgmnfx3Yoy8+yDyRe1VSVVG4Nq6aeAngJoyzPlleKaCEAjBGR3JnUDmeA71VwLXbjgWuH0kYP5IN09FPSVE+COx7S1YZNHhtLWTu0kbyY9x+ocieI8eO3mva5oc05BGQRwXG54Le/RpsHaJLNbrz9oXGrjnhbIKOSbdgY76gWNxvYdka6acEG0gQQCDkHgqqgGAANMKqAiIgIiIChtsqt9DsleaqL8cNDM9vmGFTKsr3RC5WeuoTwqad8X8zSEHJtlt0l0uVHbac7r53iMOP0jmfQAn0XQlmtNFZKFlHboGxRNGpA7Tz+048ytO9F8RZttSx1A3ZYmSgg8nhpBH6reA4LLz2ncaOGIzXnUwQ1UL4aqJk0TxhzJGhwPoVhdV0VWasrzLT1dXRwnV0MW64D90uBI91nC9ab5noqa3mvxbasT9WNh2Ys1giDLZQxxvAwZn9uR3m46+nBfe0Oz9t2hoX0lygDsjsStAEkR72u5foealUTtO6dYzHMV9tVRY7vVW2rwZad+7vgYD28WuHgQQVvnoLke/YKNr/wx1UzWeW9k+5KwPpxomR3O11zQA6aF8T/HcII/rK2V0PUwpujy1jnJ1sp/ikcf0wt1LdqxLJaMnGaIiKSIiIgIiICsbtXi30vWlu8Sd1o8VfKzutC24UjoSd05y09xUbbnjtc31pl9p+F6UaC7UsYjpbjJM97G8GSdW7e9Dne88rYoVhJb5qOdnxUOrHdiTGdTxwfJX6xXtMz621rEfBetN8z0XkvWm+Z6KDq6RERxq/pXtdVe9pbFb6YhofBM4vdq2MAt3nEeQHstkbDyQUlopbPAHFtFA2Nr3cX4GpPmdVbVtOZ6proYQ+oY0tjdjVoOM/oFLWC0uoGmSY/euGMDkFp4rWnIj4p5K1iJmfqZREWlnEREBERAREQWV2pDV0b4243x2mZ7wseYctGQQeYPIrLlG3C2CZxlhIbIeI5O/wC1Rzcfb2F3FyZ5KEXrTfM9FSWGWE4ljc0+I0/NVpvmHyWTJifWjdXSpyyeCqAScAEnuAV1BQOkOZ+yz9nmfNTrSbfEbWiI9Us8BLpKpwI39GZ7lKqgAAwOCqtta9YxltbtOiIikiIiICIiAiIgL4kkZGxz5HBrGjJc44ACq9waCScAc1zh0kbY3LaK61FFN1tNb6eUsZRnTJacb0nefYe6Dfd4qIpaUxRuD98jJb3ceKg4aaR0hDJ3NCxboq2l+1bV9l1cma2iaA0uOskXAHxI0B9O9Z0AAc4GVm5KTadbeOsdfFxatykLmueTv8XOPNSkU8Uu91UjX7pw7dOcHx7lh+097g2es09xnw4sG7FHzkeeDf8APgCtD2zaW8Wu8yXijrHtrZXl8zjq2UniHNzqPDlywrOKMjFPPWIn+urUUVsvdzfrDRXM076Z1TEHmF5zu/5B4g9xClVaoEREBERAREQEREFlc5C2EMH1H2XPXSxSNpds5nsaAKmnjmd4u1af6AugLqfvIx4FaF6ZqmP/AFbDG57WllEzOTji55/95qH7L5iI4mLWS6VFlutPcaM/ewPzuk4D28HNPgRke/JdFWq4U91t1PX0b9+CoYHsPMd4PiDoVzH18P8Aux/zBT9n2yqbTYLjaKedgjq/lyB+DCTo8t8x+R1XbRrnFydEp0lbS/b16+Hpn71BREsjxwkf9T/7Dw81i9BTfGV9LSHhUTxxH+JwH91aCaEDAljAHLeCv7DVQx362SdawhlZCT2hw32rv4QmZtbZdRWotik6pg3WbuGgcscPZSyhKQ7tVH+9hTS5X4nzxllURFJSIiICIiAomqudZDWOYy3yyQMcWue0OJOjSHDTUau0Hd6KWVEECLtcC7Mlmect3m43sjV+hy3j2W/n5ZT1s4lcZLIZcENBa0knVwOpZw0B9fLM8iCCjqXdQ98lly8S7rWthPabjIOrfTUDXjgar7pJ3TS7r7II2agOLeJxnm0YBxjJxy0U0nNBB1UzoaqRkdsZLGwgdmmdkncccA4wdQ0Z4a4VrHV1b5mtNlYxhH4nUztNPAevlpxWTIggfj7oe2La0M3S4Esdn8G8NOPcOGc5GNMqUoKmWoM3WxOYGPAbljm5Ba051HeSPRXRQIKoiICIiD//2Q=="
          alt=""
        />
      </div>

      <div className="content-profile p-4 mt-2">
        <h5
          className="center"
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Huu tai
        </h5>
        <label
          className="cl-second center"
          style={{
            fontSize: ".8rem",
          }}
        >
          Fullstack Developer
        </label>
      </div>
      <ButtonCustom
        backgroundColor="transparent"
        color="#fff"
        width="100%"
        height="2rem"
        style={{
          fontWeight: 600,
          marginRight: "1rem",
          borderTop: " 1px  solid #24a1ee",
          borderRadius: 0,
        }}
        name="Profile"
      />
    </div>
  );
};

export default CardProfile;
