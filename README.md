# Temperature Display Component

The Temperature Display component is designed to showcase target temperature information within an Angular application.

# Concept

The component operates on a rotational scale where temperature values are mapped to degrees. The scale ranges from -10°C to 70°C, with each degree equivalent to 4.5° of rotation. For instance:

-10°C corresponds to 180°
0°C corresponds to 135°
10°C corresponds to 90°
Calculation
The conversion from temperature to degrees follows a linear progression, with each degree increment corresponding to 4.5°C. The formula for conversion is straightforward, ensuring a clear mapping between temperature values and their visual representation.

# Component Structure

The display-body component is designed to be modular and self-contained, allowing for easy integration into various parts of the project. It adapts to the size of its parent component, ensuring seamless integration and scalability.

# How to Run

To run the application, ensure all Angular dependencies are installed. Then, execute ng start to initiate the application. The Angular CLI handles the build and deployment process, making it straightforward to launch the project locally.
