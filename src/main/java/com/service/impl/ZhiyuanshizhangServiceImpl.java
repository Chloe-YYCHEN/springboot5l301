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


import com.dao.ZhiyuanshizhangDao;
import com.entity.ZhiyuanshizhangEntity;
import com.service.ZhiyuanshizhangService;
import com.entity.vo.ZhiyuanshizhangVO;
import com.entity.view.ZhiyuanshizhangView;

@Service("zhiyuanshizhangService")
public class ZhiyuanshizhangServiceImpl extends ServiceImpl<ZhiyuanshizhangDao, ZhiyuanshizhangEntity> implements ZhiyuanshizhangService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ZhiyuanshizhangEntity> page = this.selectPage(
                new Query<ZhiyuanshizhangEntity>(params).getPage(),
                new EntityWrapper<ZhiyuanshizhangEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ZhiyuanshizhangEntity> wrapper) {
		  Page<ZhiyuanshizhangView> page =new Query<ZhiyuanshizhangView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ZhiyuanshizhangVO> selectListVO(Wrapper<ZhiyuanshizhangEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ZhiyuanshizhangVO selectVO(Wrapper<ZhiyuanshizhangEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ZhiyuanshizhangView> selectListView(Wrapper<ZhiyuanshizhangEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ZhiyuanshizhangView selectView(Wrapper<ZhiyuanshizhangEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
