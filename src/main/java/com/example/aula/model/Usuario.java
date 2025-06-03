package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tab_usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    private String nomeDoPrato;

    private String descricao;

    private int preco;

    private String categoria;

    private String disponibilidade;

    private String url;

    public Usuario() {
    }

    public Usuario(Long id, String nomeDoPrato, String descricao, int preco, String categoria, String disponibilidade, String url) {
        this.id = id;
        this.nomeDoPrato = nomeDoPrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome do prato é obrigatório.") String getNomeDoPrato() {
        return nomeDoPrato;
    }

    public void setNomeDoPrato(@NotBlank(message = "Nome do prato é obrigatório.") String nomeDoPrato) {
        this.nomeDoPrato = nomeDoPrato;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(String disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nomeDoPrato='" + nomeDoPrato + '\'' +
                ", descricao='" + descricao + '\'' +
                ", preco=" + preco +
                ", categoria='" + categoria + '\'' +
                ", disponibilidade='" + disponibilidade + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}





