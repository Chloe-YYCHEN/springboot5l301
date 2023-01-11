package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.DakatuiqianEntity;
import com.entity.view.DakatuiqianView;

import com.service.DakatuiqianService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 打卡退签
 * 后端接口
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
@RestController
@RequestMapping("/dakatuiqian")
public class DakatuiqianController {
    @Autowired
    private DakatuiqianService dakatuiqianService;

    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,DakatuiqianEntity dakatuiqian,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("putongguanliyuan")) {
			dakatuiqian.setGuanliyuanzhanghao((String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("zhiyuanzhe")) {
			dakatuiqian.setZhiyuanzhezhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<DakatuiqianEntity> ew = new EntityWrapper<DakatuiqianEntity>();
		PageUtils page = dakatuiqianService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, dakatuiqian), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,DakatuiqianEntity dakatuiqian, 
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("putongguanliyuan")) {
			dakatuiqian.setGuanliyuanzhanghao((String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("zhiyuanzhe")) {
			dakatuiqian.setZhiyuanzhezhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<DakatuiqianEntity> ew = new EntityWrapper<DakatuiqianEntity>();
		PageUtils page = dakatuiqianService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, dakatuiqian), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( DakatuiqianEntity dakatuiqian){
       	EntityWrapper<DakatuiqianEntity> ew = new EntityWrapper<DakatuiqianEntity>();
      	ew.allEq(MPUtil.allEQMapPre( dakatuiqian, "dakatuiqian")); 
        return R.ok().put("data", dakatuiqianService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(DakatuiqianEntity dakatuiqian){
        EntityWrapper< DakatuiqianEntity> ew = new EntityWrapper< DakatuiqianEntity>();
 		ew.allEq(MPUtil.allEQMapPre( dakatuiqian, "dakatuiqian")); 
		DakatuiqianView dakatuiqianView =  dakatuiqianService.selectView(ew);
		return R.ok("查询打卡退签成功").put("data", dakatuiqianView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        DakatuiqianEntity dakatuiqian = dakatuiqianService.selectById(id);
        return R.ok().put("data", dakatuiqian);
    }

    /**
     * 前端详情
     */
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        DakatuiqianEntity dakatuiqian = dakatuiqianService.selectById(id);
        return R.ok().put("data", dakatuiqian);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody DakatuiqianEntity dakatuiqian, HttpServletRequest request){
    	dakatuiqian.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(dakatuiqian);
        dakatuiqianService.insert(dakatuiqian);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody DakatuiqianEntity dakatuiqian, HttpServletRequest request){
    	dakatuiqian.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(dakatuiqian);
    	dakatuiqian.setUserid((Long)request.getSession().getAttribute("userId"));
        dakatuiqianService.insert(dakatuiqian);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody DakatuiqianEntity dakatuiqian, HttpServletRequest request){
        //ValidatorUtils.validateEntity(dakatuiqian);
        dakatuiqianService.updateById(dakatuiqian);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        dakatuiqianService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<DakatuiqianEntity> wrapper = new EntityWrapper<DakatuiqianEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("putongguanliyuan")) {
			wrapper.eq("guanliyuanzhanghao", (String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("zhiyuanzhe")) {
			wrapper.eq("zhiyuanzhezhanghao", (String)request.getSession().getAttribute("username"));
		}

		int count = dakatuiqianService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	







}
