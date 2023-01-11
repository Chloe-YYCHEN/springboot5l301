package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 普通管理员
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
@TableName("putongguanliyuan")
public class PutongguanliyuanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public PutongguanliyuanEntity() {
		
	}
	
	public PutongguanliyuanEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 管理员账号
	 */
					
	private String guanliyuanzhanghao;
	
	/**
	 * 密码
	 */
					
	private String mima;
	
	/**
	 * 管理员姓名
	 */
					
	private String guanliyuanxingming;
	
	/**
	 * 头像
	 */
					
	private String touxiang;
	
	/**
	 * 联系方式
	 */
					
	private String lianxifangshi;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：管理员账号
	 */
	public void setGuanliyuanzhanghao(String guanliyuanzhanghao) {
		this.guanliyuanzhanghao = guanliyuanzhanghao;
	}
	/**
	 * 获取：管理员账号
	 */
	public String getGuanliyuanzhanghao() {
		return guanliyuanzhanghao;
	}
	/**
	 * 设置：密码
	 */
	public void setMima(String mima) {
		this.mima = mima;
	}
	/**
	 * 获取：密码
	 */
	public String getMima() {
		return mima;
	}
	/**
	 * 设置：管理员姓名
	 */
	public void setGuanliyuanxingming(String guanliyuanxingming) {
		this.guanliyuanxingming = guanliyuanxingming;
	}
	/**
	 * 获取：管理员姓名
	 */
	public String getGuanliyuanxingming() {
		return guanliyuanxingming;
	}
	/**
	 * 设置：头像
	 */
	public void setTouxiang(String touxiang) {
		this.touxiang = touxiang;
	}
	/**
	 * 获取：头像
	 */
	public String getTouxiang() {
		return touxiang;
	}
	/**
	 * 设置：联系方式
	 */
	public void setLianxifangshi(String lianxifangshi) {
		this.lianxifangshi = lianxifangshi;
	}
	/**
	 * 获取：联系方式
	 */
	public String getLianxifangshi() {
		return lianxifangshi;
	}

}
