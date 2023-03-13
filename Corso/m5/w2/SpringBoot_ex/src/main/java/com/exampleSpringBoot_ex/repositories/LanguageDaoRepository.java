package com.exampleSpringBoot_ex.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.exampleSpringBoot_ex.model.Language;


@Repository
public interface LanguageDaoRepository extends CrudRepository<Language, Long> {

	
	public boolean existsBylingua(Language lingua);
	
}
