package com.dao;

import com.entity.ZhiyuanshizhangEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ZhiyuanshizhangVO;
import com.entity.view.ZhiyuanshizhangView;


/**
 * 志愿时长
 * 
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
public interface ZhiyuanshizhangDao extends BaseMapper<ZhiyuanshizhangEntity> {
	
	List<ZhiyuanshizhangVO> selectListVO(@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);
	
	ZhiyuanshizhangVO selectVO(@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);
	
	List<ZhiyuanshizhangView> selectListView(@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);

	List<ZhiyuanshizhangView> selectListView(Pagination page,@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);
	
	ZhiyuanshizhangView selectView(@Param("ew") Wrapper<ZhiyuanshizhangEntity> wrapper);
	

}
