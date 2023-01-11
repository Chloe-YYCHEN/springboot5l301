package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ZhiyuanshizhangEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ZhiyuanshizhangVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ZhiyuanshizhangView;


/**
 * 志愿时长
 *
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
public interface ZhiyuanshizhangService extends IService<ZhiyuanshizhangEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ZhiyuanshizhangVO> selectListVO(Wrapper<ZhiyuanshizhangEntity> wrapper);
   	
   	ZhiyuanshizhangVO selectVO(@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);
   	
   	List<ZhiyuanshizhangView> selectListView(Wrapper<ZhiyuanshizhangEntity> wrapper);
   	
   	ZhiyuanshizhangView selectView(@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ZhiyuanshizhangEntity> wrapper);
   	

}

