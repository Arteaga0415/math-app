import { render, fireEvent, screen } from "@testing-library/react";
import Calculator from "../components/calculator";

describe("Calculator component se comporta y actualiza bien el contenido con sus hijos", () => {
  it("Los numeros se actualizan de forma correcta", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "3" } });

    expect(num1Input).toHaveValue(5);
    expect(num2Input).toHaveValue(3);
  });

  it("Simular evento de click en botón de suma", () => {
    render(<Calculator />);

    const num1Input = screen.getByTestId("num1");
    const num2Input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultDisplay = screen.getByTestId("result");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "3" } });
    fireEvent.click(addButton);

    expect(resultDisplay).toHaveTextContent("8");
  });

  it("Simular evento de click en botón de resta", () => {
    render(<Calculator />);
    fireEvent.change(screen.getByTestId("num1"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("num2"), { target: { value: "5" } });
    fireEvent.click(screen.getByTestId("subtract"));
    expect(screen.getByTestId("result")).toHaveTextContent("5");
  });
});
