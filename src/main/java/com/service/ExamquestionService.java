package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ExamquestionEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ExamquestionVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ExamquestionView;


/**
 * 测试试题
 *
 * @author 
 * @email 
 * @date 2022-01-23 12:30:46
 */
public interface ExamquestionService extends IService<ExamquestionEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ExamquestionVO> selectListVO(Wrapper<ExamquestionEntity> wrapper);
   	
   	ExamquestionVO selectVO(@Param("ew") Wrapper<ExamquestionEntity> wrapper);
   	
   	List<ExamquestionView> selectListView(Wrapper<ExamquestionEntity> wrapper);
   	
   	ExamquestionView selectView(@Param("ew") Wrapper<ExamquestionEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ExamquestionEntity> wrapper);
   	

}

