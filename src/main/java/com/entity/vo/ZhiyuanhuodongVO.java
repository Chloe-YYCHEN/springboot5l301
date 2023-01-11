package com.entity.vo;

import com.entity.ZhiyuanhuodongEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 志愿活动
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
public class ZhiyuanhuodongVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 活动名称
	 */
	
	private String huodongmingcheng;
		
	/**
	 * 活动图片
	 */
	
	private String huodongtupian;
		
	/**
	 * 服务类型
	 */
	
	private String fuwuleixing;
		
	/**
	 * 服务人群
	 */
	
	private String fuwurenqun;
		
	/**
	 * 服务区域
	 */
	
	private String fuwuquyu;
		
	/**
	 * 活动城市
	 */
	
	private String huodongchengshi;
		
	/**
	 * 服务岗位
	 */
	
	private String fuwugangwei;
		
	/**
	 * 志愿时长
	 */
	
	private Integer zhiyuanshizhang;
		
	/**
	 * 开始时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date kaishishijian;
		
	/**
	 * 报名条件
	 */
	
	private String baomingtiaojian;
		
	/**
	 * 管理员账号
	 */
	
	private String guanliyuanzhanghao;
		
	/**
	 * 管理员姓名
	 */
	
	private String guanliyuanxingming;
				
	
	/**
	 * 设置：活动名称
	 */
	 
	public void setHuodongmingcheng(String huodongmingcheng) {
		this.huodongmingcheng = huodongmingcheng;
	}
	
	/**
	 * 获取：活动名称
	 */
	public String getHuodongmingcheng() {
		return huodongmingcheng;
	}
				
	
	/**
	 * 设置：活动图片
	 */
	 
	public void setHuodongtupian(String huodongtupian) {
		this.huodongtupian = huodongtupian;
	}
	
	/**
	 * 获取：活动图片
	 */
	public String getHuodongtupian() {
		return huodongtupian;
	}
				
	
	/**
	 * 设置：服务类型
	 */
	 
	public void setFuwuleixing(String fuwuleixing) {
		this.fuwuleixing = fuwuleixing;
	}
	
	/**
	 * 获取：服务类型
	 */
	public String getFuwuleixing() {
		return fuwuleixing;
	}
				
	
	/**
	 * 设置：服务人群
	 */
	 
	public void setFuwurenqun(String fuwurenqun) {
		this.fuwurenqun = fuwurenqun;
	}
	
	/**
	 * 获取：服务人群
	 */
	public String getFuwurenqun() {
		return fuwurenqun;
	}
				
	
	/**
	 * 设置：服务区域
	 */
	 
	public void setFuwuquyu(String fuwuquyu) {
		this.fuwuquyu = fuwuquyu;
	}
	
	/**
	 * 获取：服务区域
	 */
	public String getFuwuquyu() {
		return fuwuquyu;
	}
				
	
	/**
	 * 设置：活动城市
	 */
	 
	public void setHuodongchengshi(String huodongchengshi) {
		this.huodongchengshi = huodongchengshi;
	}
	
	/**
	 * 获取：活动城市
	 */
	public String getHuodongchengshi() {
		return huodongchengshi;
	}
				
	
	/**
	 * 设置：服务岗位
	 */
	 
	public void setFuwugangwei(String fuwugangwei) {
		this.fuwugangwei = fuwugangwei;
	}
	
	/**
	 * 获取：服务岗位
	 */
	public String getFuwugangwei() {
		return fuwugangwei;
	}
				
	
	/**
	 * 设置：志愿时长
	 */
	 
	public void setZhiyuanshizhang(Integer zhiyuanshizhang) {
		this.zhiyuanshizhang = zhiyuanshizhang;
	}
	
	/**
	 * 获取：志愿时长
	 */
	public Integer getZhiyuanshizhang() {
		return zhiyuanshizhang;
	}
				
	
	/**
	 * 设置：开始时间
	 */
	 
	public void setKaishishijian(Date kaishishijian) {
		this.kaishishijian = kaishishijian;
	}
	
	/**
	 * 获取：开始时间
	 */
	public Date getKaishishijian() {
		return kaishishijian;
	}
				
	
	/**
	 * 设置：报名条件
	 */
	 
	public void setBaomingtiaojian(String baomingtiaojian) {
		this.baomingtiaojian = baomingtiaojian;
	}
	
	/**
	 * 获取：报名条件
	 */
	public String getBaomingtiaojian() {
		return baomingtiaojian;
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
			
}
