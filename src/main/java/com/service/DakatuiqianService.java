package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DakatuiqianEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DakatuiqianVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DakatuiqianView;


/**
 * 打卡退签
 *
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
public interface DakatuiqianService extends IService<DakatuiqianEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DakatuiqianVO> selectListVO(Wrapper<DakatuiqianEntity> wrapper);
   	
   	DakatuiqianVO selectVO(@Param("ew") Wrapper<DakatuiqianEntity> wrapper);
   	
   	List<DakatuiqianView> selectListView(Wrapper<DakatuiqianEntity> wrapper);
   	
   	DakatuiqianView selectView(@Param("ew") Wrapper<DakatuiqianEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DakatuiqianEntity> wrapper);
   	

}

