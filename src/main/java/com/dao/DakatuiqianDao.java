package com.dao;

import com.entity.DakatuiqianEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DakatuiqianVO;
import com.entity.view.DakatuiqianView;


/**
 * 打卡退签
 * 
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
public interface DakatuiqianDao extends BaseMapper<DakatuiqianEntity> {
	
	List<DakatuiqianVO> selectListVO(@Param("ew") Wrapper<DakatuiqianEntity> wrapper);
	
	DakatuiqianVO selectVO(@Param("ew") Wrapper<DakatuiqianEntity> wrapper);
	
	List<DakatuiqianView> selectListView(@Param("ew") Wrapper<DakatuiqianEntity> wrapper);

	List<DakatuiqianView> selectListView(Pagination page,@Param("ew") Wrapper<DakatuiqianEntity> wrapper);
	
	DakatuiqianView selectView(@Param("ew") Wrapper<DakatuiqianEntity> wrapper);
	

}
