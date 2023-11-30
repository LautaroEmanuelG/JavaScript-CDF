package com.cdf.ProyectoThyleaf.Moduls;

public class Producto {
    String nombre;
    String img;
    int stock;

    public Producto(String nombre, String img, int stock) {
        this.nombre = nombre;
        this.img = img;
        this.stock = stock;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getNombre() {
        return nombre;
    }

    public String getImg() {
        return img;
    }

    public int getStock() {
        return stock;
    }
}
