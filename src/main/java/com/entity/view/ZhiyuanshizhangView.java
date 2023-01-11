package com.entity.view;

import com.entity.ZhiyuanshizhangEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 志愿时长
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
@TableName("zhiyuanshizhang")
public class ZhiyuanshizhangView  extends ZhiyuanshizhangEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ZhiyuanshizhangView(){
	}
 
 	public ZhiyuanshizhangView(ZhiyuanshizhangEntity zhiyuanshizhangEntity){
 	try {
			BeanUtils.copyProperties(this, zhiyuanshizhangEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
