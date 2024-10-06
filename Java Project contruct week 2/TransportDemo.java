import java.util.ArrayList;
import java.util.List;

// Abstract base class
abstract class Transport {
    // Abstract method to be overridden by subclasses
    public abstract void move();
}

// Subclass representing Car
class Car extends Transport {
    @Override
    public void move() {
        System.out.println("The car is driving.");
    }
}

// Subclass representing Bicycle
class Bicycle extends Transport {
    @Override
    public void move() {
        System.out.println("The bicycle is pedaling.");
    }
}

// Subclass representing Airplane
class Airplane extends Transport {
    @Override
    public void move() {
        System.out.println("The airplane is flying.");
    }
}

public class TransportDemo {
    public static void main(String[] args) {
        // List to hold various transport types
        List<Transport> transports = new ArrayList<>();
        transports.add(new Car());
        transports.add(new Bicycle());
        transports.add(new Airplane());

        // Demonstrate polymorphism by calling move() on each transport type
        for (Transport transport : transports) {
            transport.move();
        }
    }
}
