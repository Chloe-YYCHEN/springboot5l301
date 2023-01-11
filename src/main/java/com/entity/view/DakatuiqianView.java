package com.entity.view;

import com.entity.DakatuiqianEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 打卡退签
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
@TableName("dakatuiqian")
public class DakatuiqianView  extends DakatuiqianEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DakatuiqianView(){
	}
 
 	public DakatuiqianView(DakatuiqianEntity dakatuiqianEntity){
 	try {
			BeanUtils.copyProperties(this, dakatuiqianEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
