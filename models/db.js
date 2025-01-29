
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alexasalexc:SN6Zlmp6yxN0UDaH@cluster0.is7pv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("Error conectando a MongoDB Atlas:", error.message);
    process.exit(1); // Termina el proceso en caso de error
  }
};

// Exportación por defecto
export default connectDB;



/*

//de usar compass comentar la parte de arriba y usar esta 
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/loginDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB en localhost");
  } catch (error) {
    console.error("Error conectando a MongoDB en localhost:", error.message);
    process.exit(1); // Termina el proceso en caso de error
  }
};

// Exportación por defecto
export default connectDB;


*/