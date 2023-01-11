package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DakatuiqianDao;
import com.entity.DakatuiqianEntity;
import com.service.DakatuiqianService;
import com.entity.vo.DakatuiqianVO;
import com.entity.view.DakatuiqianView;

@Service("dakatuiqianService")
public class DakatuiqianServiceImpl extends ServiceImpl<DakatuiqianDao, DakatuiqianEntity> implements DakatuiqianService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DakatuiqianEntity> page = this.selectPage(
                new Query<DakatuiqianEntity>(params).getPage(),
                new EntityWrapper<DakatuiqianEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DakatuiqianEntity> wrapper) {
		  Page<DakatuiqianView> page =new Query<DakatuiqianView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DakatuiqianVO> selectListVO(Wrapper<DakatuiqianEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DakatuiqianVO selectVO(Wrapper<DakatuiqianEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DakatuiqianView> selectListView(Wrapper<DakatuiqianEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DakatuiqianView selectView(Wrapper<DakatuiqianEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
