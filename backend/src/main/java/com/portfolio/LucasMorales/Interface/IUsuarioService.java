/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portfolio.LucasMorales.Interface;


import com.portfolio.LucasMorales.entity.usuario;
import java.util.List;

/**
 *
 * @author PC
 */
public interface IUsuarioService {
    public List<usuario> getUsuario();
    
    public void saveUsuario(usuario usuario);
    
    public void deleteUsuario(int id);
    
    public usuario findUsuario(Integer id);
}
